import React from 'react';
import Card from '../Card/Card';
import Nav from '../Nav/Nav';
import './CardList.css'
import { firestore } from '../../firebase/firebase.utils';

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataCount: [],
            isTutorCount: 0,
            isTuteeCount: 0
        };
    }

    componentDidMount() {        
        firestore.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({data: [...this.state.data, doc.data()] })
            });
        });

        firestore.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({ dataCount: doc.data() });

                if (this.state.dataCount.isTutor  === 'on') {
                    this.setState({ isTutorCount: this.state.isTutorCount + 1});
                } else if (this.state.dataCount.isTutor  === 'off') {
                    this.setState({ isTuteeCount: this.state.isTuteeCount + 1});
                }
            });
        });
    }

    render() {
        return (
            <div className="cardlist">
                <Nav 
                    isTutorCount={this.state.isTutorCount}
                    isTuteeCount={this.state.isTuteeCount}
                />
                {
                    <div className="cardlist-card">                        
                        {this.state.data &&
                            this.state.data.map((item, i) => {
                                if(item.isTutor === 'on') {
                                    return (
                                        <Card 
                                            key={i}
                                            email={item.email}
                                            name={item.name}
                                        />
                                    )
                                }
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default CardList;