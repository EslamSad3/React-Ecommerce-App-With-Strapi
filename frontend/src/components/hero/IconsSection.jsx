import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  useThemeProps,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

function IconsSection() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        
        backgroundColor: theme.palette.mode === "dark" ? "#000" : "#fff",
        mt: 3,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        flexWrap={"wrap"}
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
      >
        <MyBox
          icon={<ElectricBoltIcon fontSize="larg" />}
          title={"Fast Delivery"}
          subTitle={"Start From $10"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlinedIcon fontSize="larg" />}
          title={"Money Gurantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<CreditScoreOutlinedIcon fontSize="larg" />}
          title={"Payment"}
          subTitle={"Secure Payment"}
        />
        <MyBox
          icon={<AccessAlarmOutlinedIcon fontSize="larg" />}
          title={"365 Days"}
          subTitle={"For Fre Return"}
        />
      </Stack>
    </Container>
  );
}

export default IconsSection;

const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "200px",
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        py: 2,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
