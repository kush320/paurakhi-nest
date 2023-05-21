import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import DashboardCard from "./subPages/DashboardCard";
import LineChart from "./subPages/LineChart";
import RecentActivites from "./subPages/RecentActivites";
import BarChart from "./subPages/BarChart";
import StatOverview from "./subPages/StatOverview";
import AuthContext from "../stores/auth-context";
import { useContext } from "react";

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4" }}>
      <div id="dashboard">
        <Box sx={{ width: "100%", paddingLeft:'1%' }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Grid >
              <DashboardCard />
              <RecentActivites />
            </Grid>
            <LineChart />
          </Box>
          {/* <Box sx={{ position: 'absolute'}}>
                    <RecentActivites />
                </Box> */}

          {/* <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} columnGap={12}>
                    <Grid item xs={4} md={5} sm={3}>
                        <DashboardCard />
                    </Grid>
                    <Grid item xs={6} md={5} sm={6} >
                        <LineChart />
                    </Grid>
                    <Grid item xs={4} md={5} sm={3} className='recentAcivity'>
                        <RecentActivites />
                    </Grid>
                </Grid> */}
          {/* <RecentActivites /> */}
          {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columnGap={12} sx={{ padding: '15px 0px', position: 'relative', bottom: '260px' }}>
                    <Grid item xs={8} md={6} >
                        <BarChart />
                    </Grid>
                    <Grid item xs={3} md={3} >
                        <StatOverview />
                    </Grid>
                </Grid> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5%",
              marginRight: "2%",
              marginBottom:'2%',
              position: "relative",
            }}
          >
            <BarChart />
            <StatOverview />
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Dashboard;
