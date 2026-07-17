import { useState } from "react";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PublicIcon from "@mui/icons-material/Public";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ApartmentIcon from "@mui/icons-material/Apartment";

function WorldNode({ node, level = 0, onSelect }) {
  const [open, setOpen] = useState(true);

  const hasChildren = node.children && node.children.length > 0;

  const getIcon = () => {
    switch (node.type) {
      case "Jurisdiction":
        return <PublicIcon color="primary" />;
      case "Institution":
        return <AccountBalanceIcon color="success" />;
      default:
        return <ApartmentIcon color="warning" />;
    }
  };

  return (
    <>
      <ListItemButton
        sx={{
          pl: level * 3,
          borderRadius: 2,
          mb: 0.5,
        }}
        onClick={() => {
          onSelect(node);
          if (hasChildren) setOpen(!open);
        }}
      >
        {getIcon()}

        <ListItemText
          sx={{ ml: 2 }}
          primary={node.name}
          secondary={node.type}
        />

        {hasChildren ? (
          open ? (
            <ExpandLessIcon />
          ) : (
            <ExpandMoreIcon />
          )
        ) : null}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={open}>
          {node.children.map((child) => (
            <WorldNode
              key={child.id}
              node={child}
              level={level + 1}
              onSelect={onSelect}
            />
          ))}
        </Collapse>
      )}
    </>
  );
}

function WorldTree({ worlds, onSelect }) {
  return (
    <Box>
      <Typography
        variant="h6"
        mb={2}
        fontWeight="bold"
      >
        World Explorer
      </Typography>

      <List>
        {worlds.map((world) => (
          <WorldNode
            key={world.id}
            node={world}
            onSelect={onSelect}
          />
        ))}
      </List>
    </Box>
  );
}

export default WorldTree;