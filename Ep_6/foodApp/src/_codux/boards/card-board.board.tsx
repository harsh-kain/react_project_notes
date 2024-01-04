import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'cardBoard',
    Board: () => <div>
        <div /></div>,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 245, windowWidth: 892, canvasHeight: 194, windowBackgroundColor: '#d70404', canvasBackgroundColor: '#b97d7d'
    }
});
