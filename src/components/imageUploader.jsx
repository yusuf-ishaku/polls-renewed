import { useState } from "react";
import { Box, Input, Button, useToast } from "@chakra-ui/react";

const ImageUploader = ({ onImageUpload }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleImageChange = (event) => {
        if (event.target.files) {
            setSelectedImage(event.target.files[0]);
        }
    };

    const handleImageUpload = () => {
        setLoading(true);

        if (!selectedImage) {
            toast({
                title: "Please select an image.",
                description: "Please choose an image to upload.",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }

        const data = new FormData();
        data.append("file", selectedImage);
        data.append("upload_preset", "classicwebcloud");
        data.append("cloud_name", "mitcheledah");

        fetch("https://api.cloudinary.com/v1_1/mitcheledah/image/upload", {
            method: "post",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const imageUrl = data.url.toString();
                onImageUpload(imageUrl);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    return (
        <Box>
            <Input
                type="file"
                p={1.5}
                accept="image/*"
                onChange={handleImageChange}
                disabled={loading}
            />
            <Button onClick={handleImageUpload} isLoading={loading} mt={2}>
                Upload Image
            </Button>
        </Box>
    );
};

export default ImageUploader;
