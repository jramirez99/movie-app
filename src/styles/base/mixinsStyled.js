

export const grid = {
    columns: ( columns, separation ) =>  {
        return `display: grid;
                grid-templates-columns: ${ columns };
                gap: ${ separation };
        `
    }
};

export const flex = {
    column: () =>  {
        return `display: flex;
                flex-direction: column;
        `
    }
};