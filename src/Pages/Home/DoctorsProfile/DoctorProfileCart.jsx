/* eslint-disable react/prop-types */
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

const DoctorProfileCart = ({ doctor }) => {

    const { profile_image, name, category, occupation, review, location, about } = doctor || {};

    return (
        <div>
            <div>
                <img src={profile_image} alt="" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default DoctorProfileCart;