import { ArchiveBoxIcon, FolderIcon, HomeIcon } from "@heroicons/react/16/solid";
import { AppShell, AppShellHeader, AppShellMain, AppShellNavbar, Burger, NavLink, Title } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";

const navLinkData = [
  { icon: <HomeIcon height={'1em'} width={'1em'} />, 
    label: 'Home', 
    path: '/overview',
    description: 'My apprenticeship overview' 
  },
  {
    icon: <ArchiveBoxIcon height={'1em'} width={'1em'} />,
    label: 'Projects',
    path: '/projects',
    description: 'A gallery of my projects throughout the apprenticeship'
  },
]

const RootLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const [activeNav, setActiveNav] = useState<number>(0);
  const navigate = useNavigate();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShellHeader
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1em',
          alignItems: 'center'
        }}
      >
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <FolderIcon height={'2em'} width={'2em'} color="#42B029"/>
        <Title order={5} style={{ flexGrow: 1, textAlign: 'center', margin: '0 auto' }}>Clover Apprenticeship Portfolio</Title>
      </AppShellHeader>
      <AppShellNavbar p="md">
        {navLinkData.map((item, index) => {
          return (
            <NavLink 
              key={item.label}
              active={index === activeNav}
              label={item.label}
              leftSection={item.icon}
              color="#42B029"
              description={item.description}
              onClick={() => {
                setActiveNav(index);
                navigate(item.path);
              }}
            />
          )
        })}
      </AppShellNavbar>
      <AppShellMain>
        <Outlet />
      </AppShellMain>
    </AppShell>
  )
}

export default RootLayout