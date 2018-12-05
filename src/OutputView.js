import React from 'react';
import './ReactTrix';

function createMarkup(text) {
  return {__html: text };
}

function OutputView (props) {
    const text  = props.text && props.text.replace('<!--block-->', '');

   
  return (
    <div dangerouslySetInnerHTML={createMarkup(text)} className ="displayAreaCmp"/>
  );
}
  export default OutputView;