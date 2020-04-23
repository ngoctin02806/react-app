import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';

import Image from './Image/index';
import PlusBox from './PlusBox';
import DeleteIcon from './DeleteIcon';
import { storage } from '../../utils/firebaseHelper';

const AddImage = (props) => {
  const [deleteImageStatus, setDeleteImageStatus] = useState(true);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [loadBlobImg, setLoadBlobImg] = useState('');
  const [changeImage, setChangeImage] = useState(true);

  const fileInput = useRef(null);

  const deleteImage = () => {
    setLoadingStatus(true);

    const storageRef = storage.ref();
    const iconRef = storageRef.child(
      `images/${localStorage.getItem('current-icon')}`
    );

    iconRef
      .delete()
      .then(() => {
        setDeleteImageStatus(false);
        localStorage.removeItem('icon-category');
        localStorage.removeItem('current-icon');
        setLoadingStatus(false);
        setChangeImage(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadImage = (fileImg) => {
    const now = new Date().getTime();

    const storageRef = storage.ref();
    const iconRef = storageRef.child(
      `images/icon-category-${now}${fileImg.name.slice(
        fileImg.name.indexOf('.')
      )}`
    );

    iconRef
      .put(fileImg)
      .then((snapshot) => {
        localStorage.setItem(
          'current-icon',
          `icon-category-${now}${fileImg.name.slice(fileImg.name.indexOf('.'))}`
        );
        return storageRef
          .child(
            `images/icon-category-${now}${fileImg.name.slice(
              fileImg.name.indexOf('.')
            )}`
          )
          .getDownloadURL();
      })
      .then((url) => {
        localStorage.setItem('icon-category', url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const previewImage = () => {
    const fileReader = new FileReader();
    fileReader.addEventListener(
      'load',
      () => {
        setDeleteImageStatus(true);
        setChangeImage(false);
        setLoadBlobImg(`${fileReader.result}`);
      },
      false
    );

    if (fileInput.current.files[0]) {
      fileReader.readAsDataURL(fileInput.current.files[0]);
      uploadImage(fileInput.current.files[0]);
    }
  };
  const srcImage = localStorage.getItem('icon-category') || '';
  return (
    <div>
      <label htmlFor="add-image">Upload icon</label>
      <div className="d-flex align-items-center">
        <div
          className="position-relative"
          style={{ display: !deleteImageStatus ? 'none' : '' }}
        >
          {loadingStatus ? (
            <div className="position-absolute d-flex justify-content-center align-items-center loading-background">
              <FontAwesomeIcon
                spin
                size="sm"
                color="#212529"
                icon={faCircleNotch}
              />
            </div>
          ) : (
            ''
          )}

          {(srcImage || loadBlobImg) && (
            <>
              <DeleteIcon deleteImage={deleteImage} />
              <Image
                width="70px"
                height="70px"
                heightSkeleton={70}
                src={srcImage || loadBlobImg}
                alt="Helloword"
              />
            </>
          )}
        </div>
        <PlusBox
          changeImage={changeImage}
          srcImage={srcImage}
          activedClick={() => fileInput.current.click()}
          preview={previewImage}
          ref={fileInput}
        />
      </div>
    </div>
  );
};

export default AddImage;
