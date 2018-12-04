import React from 'react';
import ListEntry from './components/ListEntry'
import InputField from './components/InputField'
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countrydb: [],
            entriesToShow: [],
            searchString: ''
        }
    }

    componentDidMount() {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({
                    countrydb: response.data,
                    entriesToShow: []
                })
            })
    }



    // Event handlers search field:

    handleSearchChange = (event) => {
        this.setState({ searchString: event.target.value })
        if (event.target.value === '') {
            this.setState({
                entriesToShow: this.state.countrydb
            })
        }
        else {
            this.setState({
                entriesToShow: this.state.countrydb.filter(entry => {
                    // entry.name.match(this.state.searchString, "//gi"))
                    const entryInLowercase = entry.name.toLowerCase()
                    const filter = event.target.value.toLowerCase()
                    return entryInLowercase.includes(filter)
                })
            })
        }
    }

    handleLinkClick = (event, entry) => {
        this.setState({
            entriesToShow: [
                entry
            ],
            searchString: ''
        })

    }

    render() {
        const SearchResults = () => {
            if (this.state.entriesToShow.length === 0) {
                return (
                    <div>
                        Search for a country name by typing above.
                    </div>
                )
            }
            else if (this.state.entriesToShow.length === 1) {
                return (
                    <div>
                        {console.log(this.state.entriesToShow)}
                        <ListEntry entry={this.state.entriesToShow[0]} />
                    </div>
                )
            }
            else if (this.state.entriesToShow.length > 1 && this.state.entriesToShow.length <= 10) {
                return (
                    <div>
                        <ul>
                            {this.state.entriesToShow.map(entry => <li onClick={(event) => this.handleLinkClick(event, entry)} key={entry.name} style={{ cursor: 'pointer' }}><u>{entry.name}</u></li>)}
                        </ul>
                    </div>
                )
            }

            else {
                return (
                    <div>
                        Too many results. Enter a less vague search term.
                    </div>

                )
            }
        }

        return (

            <div>
                <h2>Country Dadabase</h2>
                <InputField text="Search by name:" value={this.state.searchString} onChange={this.handleSearchChange} />
                <SearchResults />
            </div>
        )
    }
}
export default App
