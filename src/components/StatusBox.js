import React from 'react';
import useStyles from './styles';

export default function StatusBox() {
  return (
    <div className={useStyles().statusBox}>
      Pointer's bounded position: (x, y).<br />
      Horizontal scrollbar position: x<br />
      Vertical scrollbar position: y<br />
      The pointer's true in-component position: (x,y)<br />
      Line: l
    </div>
  );
}