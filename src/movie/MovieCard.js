import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

const MovieCard = ({ movie, classes }) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        title={movie.title}
        subheader={movie.release_date}
      />
      <CardContent>
        <Typography className={classes.pos} color='textSecondary'>
          summary
        </Typography>
        <Typography component='p'>
          {movie.overview}
        </Typography>
      </CardContent>
    </Card>
  )
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MovieCard)
