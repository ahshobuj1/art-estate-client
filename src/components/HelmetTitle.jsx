import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types'; // ES6

const HelmetTitle = ({title}) => {
    return (
        <Helmet>
            <title>ArtEstate | {title}</title>
        </Helmet>
    );
};

export default HelmetTitle;

HelmetTitle.propTypes = {
    title: PropTypes.string,
};
