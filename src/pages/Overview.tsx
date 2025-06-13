import { type FC } from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Grid,
  Image,
  Group,
  Stack,
  Box,
  Center,
  Divider,
  Timeline,
  ThemeIcon,
  Paper,
  Badge,
} from "@mantine/core";
import {
  BriefcaseIcon,
  EnvelopeIcon,
  FolderArrowDownIcon,
} from "@heroicons/react/16/solid";
import CloverGroupPhoto from "../assets/clover-saintp.jpg";
import GithubIcon from "../assets/icons/github-icon.svg";
import LinkedinIcon from "../assets/icons/linkedin-icon.svg";

type TimelineItem = {
  title: string;
  duration: string;
  description: string;
  metric: string;
  technologies: string[];
};

const Overview: FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      title: "Multiverse Student",
      duration: "09/2024 - 12/2024",
      description:
        "Dedicated full-time schedule to learning programming fundamentals across frontend and backend stacks related to Clover and my specific team(Billing).",
      metric:
        "Completed all assignments/projects receiving 'exceeded expectations' assessment from instructor and manager.",
      technologies: ["JavaScript", "Express.js", "Jest", "Java", "Object Oriented Programming", "SQL", "Sequelize", "SQLite"]
    },
    {
      title: "Apprentice Billing Engineer",
      duration: "01/2025 - Present",
      description:
        "Contributed to various projects and tasks involved with Clover Billing including backend development of microservices and frontend development of web applications.",
      metric: "Developed 10+ UI features and pages across internal billing operations admin tools and client facing merchant dashboards. Contributed to developement, bug fixes, and testing of 4 critical microservices involved with Clover's event based billing architecture.",
      technologies: ["React", "TypeScript", "Material UI", "Java", "Spring Boot", "Docker", "JUnit", "Android Development"]
    },
  ];

  return (
    <Box>
      <Container size="lg" py={80}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <div>
                <Title
                  order={1}
                  size="3.5rem"
                  fw={900}
                  mb="md"
                  style={{ textWrap: "pretty" }}
                >
                  My{" "}
                  <Text component="span" c="#42B029" inherit>
                    Clover Apprenticeship
                  </Text>
                </Title>
                <Title order={2} size="1.5rem" fw={400} c="dimmed" mb="xl">
                  Full Stack Billing Engineer
                </Title>
              </div>
              <Text size="lg" c="dimmed" lh={1.6}>
                I was very fortunate to have the opportunity to work at Clover
                on the Billing Team. Through this experience I gained hands on
                experience with technologies like React, TypeScript, MUI, Java,
                Spring Boot, and Android development.
              </Text>
              <Group>
                <Button
                  size="lg"
                  color="#42B029"
                  leftSection={<FolderArrowDownIcon height={"1em"} />}
                >
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  color="#42B029"
                  leftSection={<EnvelopeIcon height={"1em"} />}
                >
                  Get In Touch
                </Button>
              </Group>
              <Group gap="md">
                <Button
                  variant="subtle"
                  color="#42B029"
                  size="sm"
                  leftSection={
                    <Image style={{ height: "2em" }} src={GithubIcon} />
                  }
                >
                  GitHub
                </Button>
                <Button
                  variant="subtle"
                  size="sm"
                  color="#42B029"
                  leftSection={
                    <Image style={{ height: "2em" }} src={LinkedinIcon} />
                  }
                >
                  LinkedIn
                </Button>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Center h="100%">
              <Image
                src={CloverGroupPhoto}
                alt="Clover office photo"
                radius="20%"
                w={"100%"}
                h={"26em"}
                fit="cover"
              />
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
      <Divider />
      <Container size="md" py={60}>
        <Stack gap="xl">
          <Box ta="center">
            <Title order={1} mb="md">
              My Professional Journey
            </Title>
            <Text c="dimmed" size="lg" maw={600} mx="auto">
              A timeline of my career progression, key achievements, and
              continuous learning
            </Text>
          </Box>
          <Timeline active={5} bulletSize={40} lineWidth={3} color="#42B029">
            {timelineItems.map((item) => {
              return (
                <Timeline.Item
                  bullet={
                    <ThemeIcon size={40} radius="xl" color="#42B029">
                      <BriefcaseIcon height={"2em"} />
                    </ThemeIcon>
                  }
                >
                  <Paper p="md" radius="md" bg="gray.0" mt="sm">
                    <Group justify="space-between" mb="sm">
                      <Text fw={600} c="blue">
                        {item.title}
                      </Text>
                      <Badge variant="light" color="green">
                        {item.duration}
                      </Badge>
                    </Group>
                    <Text size="sm" c="dimmed" mb="md">
                      {item.description}
                    </Text>
                    <Group gap="xs">
                      {item.technologies.map((tech) => {
                        return (
                        <Badge size="xs" variant="outline">
                          {tech}
                        </Badge>
                        );
                      })}
                    </Group>
                    <Text size="sm" mt="sm" fw={500}>
                      {item.metric}
                    </Text>
                  </Paper>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </Stack>
      </Container>
    </Box>
  );
};

export default Overview;
