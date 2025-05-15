import { createStyles } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
  modalContent: {
    backgroundColor: "#1c1c1e",
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
  },
  header: {
    display: 'flex',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  poster: {
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.md,
  },
  details: {
    flex: 1,
    color: 'white',
  },
  title: {
    marginBottom: theme.spacing.xs,
  },
  infoBadges: {
    marginBottom: theme.spacing.sm,
  },
  overview: {
    color: theme.colors.gray[6],
    lineHeight: 1.6,
  },
  trailerButton: {
    marginBottom: theme.spacing.md,
  },
  trailerContainer: {
    margin: `${theme.spacing.md}px 0`,
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.md,
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  },
  crewSection: {
    marginBottom: theme.spacing.lg,
  },
  crewBadge: {
    marginRight: theme.spacing.xs,
  },
  castSection: {
    marginTop: theme.spacing.lg,
  },
  castTitle: {
    marginBottom: theme.spacing.sm,
  },
  castContainer: {
    display: 'flex',
    gap: theme.spacing.md,
    overflowX: 'auto',
    paddingBottom: theme.spacing.sm,
  },
  castCard: {
    backgroundColor: "#414047",
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.sm,
    flex: '0 0 auto',
    width: 140,
    padding: theme.spacing.xs,
    textAlign: 'center',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows.md,
    },
  },
  castImage: {
    borderRadius: theme.radius.sm,
    marginBottom: theme.spacing.xs,
  },
  relatedSection: {
    marginTop: theme.spacing.lg,
  },
  relatedTitle: {
    marginBottom: theme.spacing.sm,
  },
  relatedContainer: {
    display: 'flex',
    gap: theme.spacing.md,
    overflowX: 'auto',
    paddingBottom: theme.spacing.sm,
  },
  relatedCard: {
    backgroundColor: "#414047",
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.sm,
    flex: '0 0 auto',
    width: 140,
    padding: theme.spacing.xs,
    textAlign: 'center',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows.md,
    },
  },
  relatedImage: {
    borderRadius: theme.radius.sm,
    marginBottom: theme.spacing.xs,
  },
}));

export default useStyles;