/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <h1 className="text-3xl font-kanit font-medium text-gray-800">{heading}</h1>
            <p className="">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;