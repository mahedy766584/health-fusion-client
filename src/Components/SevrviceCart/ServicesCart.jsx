import {  Card, CardBody, Image, Stack, Text } from "@chakra-ui/react"
import { IoArrowForwardCircleOutline } from "react-icons/io5";


// eslint-disable-next-line react/prop-types
const ServicesCart = ({ item }) => {

    const { name, image, description, services } = item || {}
    // console.log(image);
    return (
        <Card className="mt-6">
            <CardBody>
                <Image src={image} alt={name} borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                    <Text className="text-2xl font-medium text-gray-800 font-kanit">{name}</Text>
                    <Text className="font-kanit text-gray-700">{description}</Text>
                    {
                        services?.map((item, idx) => <Text
                            className="font-kanit text-gray-700 flex items-center text-start gap-2"
                            key={idx}>
                            <span className="text-[#F87171]"><IoArrowForwardCircleOutline/></span> {item}
                        </Text>
                        )
                    }
                </Stack>
            </CardBody>
        </Card>
    );
};

export default ServicesCart;