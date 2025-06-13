import { Carousel } from "@mantine/carousel";
import { Button, Card, Container, Divider, Group, Image, Stack, Text, Title } from "@mantine/core";
import type { FC } from "react";
import DowngradeUI from "../assets/Screen Recording 2025-06-13 at 12.13.44 PM.mov";

type PortfolioProject = {
  image: string;
  video?: string;
  title: string;
  description: string;
}

const Projects: FC = () => {
  const portfolioProjects: PortfolioProject[] = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      video: DowngradeUI,
      title: "Merchant Downgrade Flow",
      description: "A dynamic UI flow that informs Clover merchants about lost or altered SaaS features that result from a plan downgrade change.",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      title: "E-commerce Platform",
      description: "Full-stack application with payment integration",
    },
    {
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      title: "Mobile App Design",
      description: "UI/UX design for productivity mobile application",
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      title: "Machine Learning Model",
      description: "Predictive analytics solution for business intelligence",
    },
  ];

  return (
    <>
      <Container size="lg" py={20}>
        <Stack gap="xl">
          <div style={{ height: '10%' }}>
            <Title order={3} ta="center" mb="md">
              Featured Projects
            </Title>
            <Text ta="center" c="dimmed" size="md" maw={600} mx="auto">
              A showcase of recent work spanning web and backend development
            </Text>
          </div>
          <Carousel
            withIndicators
            height={'90vh'}
            slideSize="100%"
            slideGap="md"
            style={{ paddingLeft: '1em' }}
            controlsOffset="xs"
            controlSize={40}
          >
            {portfolioProjects.map((item, index) => (
              <Carousel.Slide key={index}>
                <Card shadow="lg" radius="md" h="90%">
                  <Card.Section
                    style={{ padding: '2em', height: '80%' }}
                  >
                    {item.video ?
                      <video height={'100%'} controls autoPlay src={item.video}></video>
                      :
                      <Image
                        src={item.image}
                        height={350}
                        alt={item.title}
                        fit="cover"
                      />
                    }
                  </Card.Section>
                  <Stack gap="sm" p="md" style={{ height: '20%' }}>
                    <Title order={3} size="1.2rem">
                      {item.title}
                    </Title>
                    <Text c="dimmed" size="sm">
                      {item.description}
                    </Text>
                    <Group>
                      <Button variant="light" color="#42B029" size="xs">
                        View Project
                      </Button>
                    </Group>
                  </Stack>
                </Card>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Stack>
      </Container>
      <Divider />
    </>
  );
};

export default Projects;
