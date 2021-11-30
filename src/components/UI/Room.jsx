import React from "react";
import {Card} from "semantic-ui-react";
import "./scss/style.scss"
import "./scss/_global.scss"

const Room = (arr) => {
    const {catalog} = arr
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    {catalog}
                </Card.Header>
            </Card.Content>
        </Card>
    )

}

export default Room

