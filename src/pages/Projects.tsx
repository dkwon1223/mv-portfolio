import { Carousel } from "@mantine/carousel";
import { Button, Card, Container, Divider, Group, Image, Stack, Text, Title } from "@mantine/core";
import type { FC } from "react";
import DowngradeUIRecording from "../assets/downgrade-recording.mov";
import DowngradeImage from "../assets/downgrade.png";
import BiteSyncRecording from "../assets/bitesync-recording.mov";
import BiteSyncImage from "../assets/bitesync.png";
import CEImage from "../assets/ce.png";
import CERecording from "../assets/ce-recording.mov";

type PortfolioProject = {
  image: string;
  video?: string;
  title: string;
  description: string;
  links: string[];
}

const Projects: FC = () => {
  const portfolioProjects: PortfolioProject[] = [
    {
      image: DowngradeImage,
      video: DowngradeUIRecording,
      title: "Merchant Downgrade Flow",
      description: "A dynamic UI flow that informs Clover merchants about lost or altered SaaS features that result from a plan downgrade change.",
      links: ["https://github.corp.clover.com/clover/web-app-ebb-portal/tree/main/src/pages/ServicePlan/PlanDowngradeModal"]
    },
    {
      image: BiteSyncImage,
      video: BiteSyncRecording,
      title: "BiteSync",
      description: "Full-stack restaurant inventory management application",
      links: ["https://github.com/dkwon1223/bitesync-client", "https://github.com/dkwon1223/bitesync-api"]
    },
    {
      image: CEImage,
      video: CERecording,
      title: "Clover Cost Estimator",
      description: "Application that allows Clover merchants to preview estimated costs for different combinations of SaaS and device offerings",
      links: ["https://github.com/david-kwon-clover/clover-ce-client"]
    }
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
                      {item.links.map((link, index) => {
                        return (
                          <Button variant="light" color="#42B029" size="sm" onClick={() => {
                            window.open(link, '_blank', 'noopener,noreferrer');
                          }}>
                            {`View Repository ${index + 1}`}
                          </Button>
                        )
                      })}
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
