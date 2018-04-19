import React ,{Component} from 'react'
import ReservationForm2 from './ReservationForm'
import axios from 'axios';
import Dnd from './Calendar';

class ReservationPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      isDialogOpen: false,
    }
  }

  loadReservationFromServer= ()=> {
    axios.get('http://localhost:3001/api/reservations')
      .then(res => {
        this.setState({data: res.data.map((item)=> {
          return {
            start: new Date(item.startDate),
            end: new Date(item.endDate),
            title: item.option,
            uniqueID: item._id

          }
        })});
      })
  }


  componentDidMount() {
    this.loadReservationFromServer()
  }

  closeDialog= () => {
    this.setState({isDialogOpen: false})
  }

  handleReservationSubmit = (reservation) => {
    let reservations = this.state.data;
    reservation.id = Date.now();
    axios.post(this.props.url, reservation)
    .then((result) =>{
      const newItem = {
        start: new Date(result.data.startDate),
        end: new Date(result.data.endDate),
        title: result.data.option
       // UniqueId: 
      }
      this.setState({data:  [...this.state.data,newItem], isDialogOpen: false});
    })
    .catch(err => {
      console.error(err);
    });
  }
  
  handleReservationEdit = (id, reservation) =>{
      let reservations = this.state.data;
      axios.put( `${this.props.url}/${id}`, reservation )
      .then(result => {
        console.log(result.data);
        const index = this.state.data.findIndex(function(item) {
          return item._id === result.data._id;
        })
        const newData = [...this.state.data];
        newData[index] = result.data;
        this.setState({data: newData});
      })
      .catch(err => {
        console.error(err);
      })
    }

  

  
  handleRenderChange = (e) =>  {
    this.setState({startDate: e.start})
    this.setState({endDate: e.end})
    this.setState({isDialogOpen: true})
  }
  

  render() {
    return (
      <div>


            <Dnd
              onRenderChange={this.handleRenderChange}
              data={this.state.data}
            />


            <div>
              <ReservationForm2
                startDate = {this.state.startDate}
                endDate = {this.state.endDate}
                onReservationSubmit={this.handleReservationSubmit}
                onReservationEdit={this.handleReservationEdit}
                isDialogOpen = {this.state.isDialogOpen}
                closeDialog = {this.closeDialog}
              />
            </div>


      </div>
    )
  }
}

export default ReservationPage;
