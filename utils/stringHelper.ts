export const getClassNames = (array: Array<string> = []) => {
    if (array.length === 0) {
        return '';
    }

    return array.filter(className => className).join(' ');
};
