import { Popup } from 'semantic-ui-react';
import React from 'react';

// https://semantic-ui.com/modules/popup.html
function MyPopup({ content, children }) {
  return <Popup inverted content={content} trigger={children} />;
}

export default MyPopup;