import React from 'react';
import { GoftinoSnippet } from '@mohsen007/react-goftino';
const GOFTINO_KEY = 'your goftino embed key';

const Goftino = () => {
  return (
    <GoftinoSnippet
      goftinoKey={GOFTINO_KEY}
      onReady={() => {
        window.Goftino.open();
      }}
    />
  );
};

