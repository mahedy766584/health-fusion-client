import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading,  Text } from "@chakra-ui/react"
import { BiSolidQuoteLeft } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
const ReviewCart = ({ review }) => {

    // console.log(review);

    const { userImage, name, location, reviewDescription } = review || {};

    return (
        <Card maxW='lg' className="px-8 font-kanit">
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name='Segun Adebayo' src={userImage} />

                        <Box>
                            <Heading size='sm'>{name}</Heading>
                            <Text>{location}</Text>
                        </Box>
                    </Flex>
                    <Text className="text-4xl text-[#F87171]"><BiSolidQuoteLeft/></Text>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text className="text-gray-700">{reviewDescription}</Text>
            </CardBody>
        </Card>
    );
};

export default ReviewCart;