import _ from 'lodash';

export const generatePhotos = (amount = 10) => {
    return _.map(_.range(0, amount), id => ({
        id,
        fileUrl: `http://loremflickr.com/320/340?random=${id}`,
        selected: false
    }));
}