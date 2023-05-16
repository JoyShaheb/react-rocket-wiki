import InboxIcon from "@mui/icons-material/MoveToInbox";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import HubIcon from "@mui/icons-material/Hub";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DiamondIcon from "@mui/icons-material/Diamond";
import GamesIcon from "@mui/icons-material/Games";
import LaunchIcon from "@mui/icons-material/Launch";
import TerrainIcon from "@mui/icons-material/Terrain";
import HomeIcon from "@mui/icons-material/Home";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { iNavbarOptions } from "../../types/types";

export const NavbarOptions: iNavbarOptions[] = [
  {
    label: "Home",
    icon: <HomeIcon fontSize="small" />,
  },
  {
    label: "capsules",
    icon: <CatchingPokemonIcon fontSize="small" />,
  },
  {
    label: "cores",
    icon: <HubIcon fontSize="small" />,
  },
  {
    label: "dragons",
    icon: <DiamondIcon fontSize="small" />,
  },
  {
    label: "history",
    icon: <BookmarksIcon fontSize="small" />,
  },
  {
    label: "landing-pads",
    icon: <GamesIcon fontSize="small" />,
  },
  // {
  //   label: "launches",
  //   icon: <LaunchIcon fontSize="small"/>,
  // },
  {
    label: "launch-pads",
    icon: <InboxIcon fontSize="small" />,
  },
  // {
  //   label: "missions",
  //   icon: <TerrainIcon fontSize="small"/>,
  // },
  {
    label: "payloads",
    icon: <InboxIcon fontSize="small" />,
  },
  {
    label: "rockets",
    icon: <RocketLaunchIcon fontSize="small" />,
  },
  {
    label: "roadster",
    icon: <TimeToLeaveIcon fontSize="small" />,
  },
  {
    label: "ships",
    icon: <DirectionsBoatIcon fontSize="small" />,
  },
];
