import React, { useState } from "react";
import { Container, VStack, Heading, Text, Button, Input, useToast, List, ListItem, ListIcon, FormControl, FormLabel } from "@chakra-ui/react";
import { FaSyringe, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const toast = useToast();

  const slots = ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 1:00 PM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM"];

  const handleBookSlot = () => {
    if (!name || !selectedSlot) {
      toast({
        title: "Error",
        description: "Please enter your name and select a slot.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Booking Confirmed",
      description: `Thank you, ${name}. Your slot at ${selectedSlot} has been booked.`,
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    // Reset after booking
    setName("");
    setSelectedSlot(null);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading>Vaccination Slot Booking</Heading>
        <FormControl>
          <FormLabel htmlFor="name">Your Name</FormLabel>
          <Input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <Text fontSize="xl" mb={4}>
          Select a Slot:
        </Text>
        <List spacing={3}>
          {slots.map((slot, index) => (
            <ListItem key={index} cursor="pointer" _hover={{ bg: "gray.100" }} p={2} borderRadius="md" onClick={() => setSelectedSlot(slot)}>
              <ListIcon as={selectedSlot === slot ? FaCheckCircle : FaSyringe} color={selectedSlot === slot ? "green.500" : "gray.500"} />
              {slot}
            </ListItem>
          ))}
        </List>
        <Button colorScheme="blue" onClick={handleBookSlot}>
          Book Slot
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
