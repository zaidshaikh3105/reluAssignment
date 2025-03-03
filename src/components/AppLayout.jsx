import React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardHeader,
  Avatar,
  IconButton,
  Container,
  Paper,
  useTheme,
  useMediaQuery,
  Drawer,
  AppBar,
  Toolbar,
  Badge,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import {
  Home as HomeIcon,
  Notifications as NotificationsIcon,
  ShoppingBag as ShopIcon,
  Chat as ConversationIcon,
  AccountBalanceWallet as WalletIcon,
  Subscriptions as SubscriptionIcon,
  Person as ProfileIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ChatBubbleOutline as CommentIcon,
  Share as ShareIcon,
  MoreVert as MoreIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

const posts = [
  {
    name: "Lara Leones",
    username: "@thewallart",
    avatar: "https://i.pravatar.cc/300?img=5",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...",
    image: "https://source.unsplash.com/600x400/?mural,art",
    likes: "9.8k",
    comments: "8.6k",
    shares: "7.2k",
    timestamp: "2 hours ago",
    isLiked: false,
  },
  {
    name: "Alex Martin",
    username: "@artfulvision",
    avatar: "https://i.pravatar.cc/300?img=8",
    content:
      "Just finished my latest piece! Exploring the intersection between urban architecture and natural elements...",
    image: "https://source.unsplash.com/600x400/?street,art",
    likes: "5.2k",
    comments: "3.4k",
    shares: "2.1k",
    timestamp: "5 hours ago",
    isLiked: true,
  },
  {
    name: "Lara Leones",
    username: "@thewallart",
    avatar: "https://i.pravatar.cc/300?img=5",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...",
    image: "https://source.unsplash.com/600x400/?mural,art",
    likes: "9.8k",
    comments: "8.6k",
    shares: "7.2k",
    timestamp: "2 hours ago",
    isLiked: false,
  },
  {
    name: "Alex Martin",
    username: "@artfulvision",
    avatar: "https://i.pravatar.cc/300?img=8",
    content:
      "Just finished my latest piece! Exploring the intersection between urban architecture and natural elements...",
    image: "https://source.unsplash.com/600x400/?street,art",
    likes: "5.2k",
    comments: "3.4k",
    shares: "2.1k",
    timestamp: "5 hours ago",
    isLiked: true,
  },
];
const artists = [
  {
    name: "Thomas Edward",
    username: "@thewildwithyou",
    avatar: "https://i.pravatar.cc/300?img=1",
    coverImage: "https://source.unsplash.com/200x100/?painting,blue",
    followers: "12.4k",
  },
  {
    name: "Chris Doe",
    username: "@thewildwithyou",
    avatar: "https://i.pravatar.cc/300?img=2",
    coverImage: "https://source.unsplash.com/200x100/?people,art",
    followers: "8.2k",
  },
  {
    name: "Maria Sanchez",
    username: "@brushstrokes",
    avatar: "https://i.pravatar.cc/300?img=4",
    coverImage: "https://source.unsplash.com/200x100/?abstract,art",
    followers: "15.7k",
  },
]; // Sidebar Menu Items
const menuItems = [
  { icon: <HomeIcon />, text: "Home", active: true, notification: 0 },
  { icon: <NotificationsIcon />, text: "Notifications", notification: 5 },
  { icon: <ShopIcon />, text: "Shop", notification: 0 },
  { icon: <ConversationIcon />, text: "Conversation", notification: 2 },
  { icon: <WalletIcon />, text: "Wallet", notification: 0 },
  { icon: <SubscriptionIcon />, text: "Subscription", notification: 0 },
  { icon: <ProfileIcon />, text: "My Profile", notification: 0 },
  { icon: <SettingsIcon />, text: "Settings", notification: 0 },
];

const MenuItem = ({ icon, text, active, notification }) => (
  <ListItem
    button
    sx={{
      borderRadius: 2,
      mb: 1,
      bgcolor: (theme) =>
        active ? alpha(theme.palette.primary.main, 0.08) : "transparent",
      borderLeft: (theme) =>
        active
          ? `3px solid ${theme.palette.primary.main}`
          : "3px solid transparent",
      "&:hover": {
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
        transition: "all 0.3s ease",
      },
      transition: "all 0.2s ease",
      py: 1,
    }}
  >
    <ListItemIcon
      sx={{
        color: (theme) =>
          active ? theme.palette.primary.main : theme.palette.text.secondary,
        minWidth: 40,
      }}
    >
      {notification > 0 ? (
        <Badge badgeContent={notification} color="error">
          {icon}
        </Badge>
      ) : (
        icon
      )}
    </ListItemIcon>
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        fontWeight: active ? 600 : 400,
        color: (theme) =>
          active ? theme.palette.primary.main : theme.palette.text.primary,
      }}
    />
  </ListItem>
);

// Reusable PostCard Component
const PostCard = ({ post }) => (
  <Card
    sx={{
      mb: 3,
      borderRadius: 3,
      boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      "&:hover": {
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
        transform: "translateY(-2px)",
      },
      overflow: "hidden",
    }}
  >
    <CardHeader
      avatar={
        <Avatar
          src={post.avatar}
          sx={{ width: 48, height: 48, border: "2px solid #f5f5f5" }}
        />
      }
      action={
        <IconButton>
          <MoreIcon />
        </IconButton>
      }
      title={
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {post.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {post.username}
          </Typography>
        </Box>
      }
      subheader={
        <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
          {post.timestamp}
        </Typography>
      }
      sx={{ pb: 1 }}
    />
    <CardContent sx={{ pb: 1, pt: 0 }}>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ mb: 1, lineHeight: 1.6 }}
      >
        {post.content.length > 120
          ? post.content.substring(0, 120) + "..."
          : post.content}
        {post.content.length > 120 && (
          <Typography
            component="span"
            color="primary"
            sx={{
              ml: 0.5,
              cursor: "pointer",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Read More
          </Typography>
        )}
      </Typography>
    </CardContent>
    <Box sx={{ px: 2, pb: 1 }}>
      <CardMedia
        component="img"
        image={post.image}
        sx={{
          borderRadius: 2,
          maxHeight: 400,
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Box>
    <CardActions sx={{ px: 2, pt: 1, pb: 2, justifyContent: "space-between" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
          <IconButton
            color={post.isLiked ? "error" : "default"}
            sx={{
              p: 1,
              transition: "all 0.2s ease",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            {post.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography variant="body2">{post.likes}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
          <IconButton sx={{ p: 1 }}>
            <CommentIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2">{post.comments}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ p: 1 }}>
            <ShareIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2">{post.shares}</Typography>
        </Box>
      </Box>
      <Box>
        <IconButton size="small" sx={{ ml: 1 }}>
          <MoreIcon fontSize="small" />
        </IconButton>
      </Box>
    </CardActions>
  </Card>
);

const ArtistCard = ({ artist }) => (
  <Card
    sx={{
      borderRadius: 3,
      mb: 2,
      overflow: "hidden",
      position: "relative",
      height: 120,
      cursor: "pointer",
      border: "none",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      },
    }}
  >
    <CardMedia
      component="img"
      height="120"
      image={artist.coverImage}
      sx={{ objectFit: "cover" }}
    />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)",
        display: "flex",
        alignItems: "center",
        p: 2,
      }}
    >
      <Avatar
        src={artist.avatar}
        sx={{
          width: 60,
          height: 60,
          border: "3px solid white",
          mr: 2,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
      <Box>
        <Typography
          variant="subtitle1"
          sx={{ color: "white", fontWeight: 600 }}
        >
          {artist.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
          {artist.username}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "rgba(255,255,255,0.9)",
            mt: 0.5,
            display: "block",
            fontWeight: 500,
          }}
        >
          {artist.followers} followers
        </Typography>
      </Box>
    </Box>
  </Card>
);

const SidebarContent = () => (
  <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        MyApp
      </Typography>
    </Box>
    <List sx={{ px: 2, flexGrow: 1 }}>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          text={item.text}
          active={item.active}
          notification={item.notification}
        />
      ))}
    </List>
    <Divider sx={{ my: 2 }} />
    <Box sx={{ p: 2 }}>
      <ListItem
        button
        sx={{
          borderRadius: 2,
          color: "text.secondary",
          "&:hover": {
            bgcolor: "rgba(244, 67, 54, 0.08)",
            color: "error.main",
            transition: "all 0.3s ease",
          },
        }}
      >
        <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItem>
    </Box>
  </Box>
);

const TrendingArtists = () => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      borderRadius: 3,
      bgcolor: "background.paper",
      border: "1px solid #EAEAEA",
      position: "sticky",
      top: 24,
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
      Trending Artists
    </Typography>
    {artists.map((artist, index) => (
      <ArtistCard key={index} artist={artist} />
    ))}
    <Box
      sx={{ textAlign: "center", mt: 2, pt: 2, borderTop: "1px solid #EAEAEA" }}
    >
      <Typography
        color="primary"
        sx={{
          cursor: "pointer",
          fontWeight: 500,
          "&:hover": { textDecoration: "underline" },
        }}
      >
        See all trending artists
      </Typography>
    </Box>
  </Paper>
);

const AppLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: "flex", bgcolor: "#F9FAFB", minHeight: "100vh" }}>
      {/* Mobile App Bar */}
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            boxShadow: "none",
            bgcolor: "background.paper",
            borderBottom: "1px solid #EAEAEA",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              MyApp
            </Typography>
            <IconButton sx={{ color: "text.secondary" }}>
              <Badge badgeContent={7} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 280,
              boxSizing: "border-box",
              bgcolor: "background.paper",
            },
          }}
        >
          <SidebarContent />
        </Drawer>
      ) : (
        <Box
          component="nav"
          sx={{
            width: 280,
            flexShrink: 0,
            height: "100vh",
            position: "sticky",
            top: 0,
            bgcolor: "background.paper",
            borderRight: "1px solid #EAEAEA",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.03)",
          }}
        >
          <Box
            sx={{
              width: 280,
              height: "100%",
              overflowY: "auto",
              "::-webkit-scrollbar": { width: "4px" },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                borderRadius: "4px",
              },
            }}
          >
            <SidebarContent />
          </Box>
        </Box>
      )}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3, md: 4 },
          mt: isMobile ? 8 : 0,
          maxWidth: "100%",
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              {posts.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <TrendingArtists />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AppLayout;
