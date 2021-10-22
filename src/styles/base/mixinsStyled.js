
export const grid = ( columns, separation ) => {
    return `
            display: grid;
            grid-template-columns: repeat( ${ columns }, 1fr );
            gap: ${ separation };
    `
};

export const flex = ( separation ) => {
    return `
            display: flex;
            gap: ${ separation };
    `
};

export const fColumn = () => {
    return `
            display: flex;
            flex-direction: column;
    `
};