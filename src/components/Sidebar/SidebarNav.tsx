import { RiBuilding2Line, RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
;

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { Stack } from "@chakra-ui/react";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink color="gray.900" icon={RiDashboardLine} href="/dashboard">Página Inicial</NavLink>
      </NavSection>
      <NavSection title="GRÁFICOS">
        <NavLink icon={RiBuilding2Line} href="/business">Índice Negócios</NavLink>
        <NavLink icon={RiGitMergeLine} href="/operation">Índice Operação</NavLink>
      </NavSection>
    </Stack>
  );
}