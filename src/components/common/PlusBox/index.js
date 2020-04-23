import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const PlusBox = React.forwardRef((props, inputRef) => {
  return (
    <div
      style={{ display: props.changeImage && !props.srcImage ? '' : 'none' }}
      onClick={() => props.activedClick()}
      className="add-image"
    >
      <FontAwesomeIcon color="#bbb" icon={faPlusSquare} />
      <input
        id="add-image"
        onChange={() => {
          props.preview();
        }}
        type="file"
        hidden
        ref={inputRef}
      />
    </div>
  );
});

export default PlusBox;
