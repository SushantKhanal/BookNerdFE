import { Button, CardActions, CardContent, Typography } from "@mui/material"
import { StyledCard, StyledCardMedia } from "./styles";

const Post = () => {
    return (
        <StyledCard>
                <StyledCardMedia 
                    image={require('../../../assets/preety.png')}
                    title="My Post"
                />
                <CardContent>
                    <Typography variant="body1" fontSize="1.1rem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris neque, accumsan faucibus laoreet 
                        quis, hendrerit id dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        mus. Quisque fringilla elit nulla, ut pharetra augue finibus in. Sed consectetur faucibus eros sed egestas. 
                        Sed viverra nulla iaculis semper fermentum. Sed et velit a mi fermentum elementum volutpat eu elit. Nulla 
                        ut auctor velit. Suspendisse potenti. Curabitur sed vehicula lectus.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">Like</Button>
                    <Button size="small" color="primary">Comment</Button>
                    <Button size="small" color="primary">Fav</Button>
                </CardActions>
        </StyledCard>
    )
}

export default Post;
