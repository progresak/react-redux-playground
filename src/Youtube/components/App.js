import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import faker from "faker";
class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onTermSubmit('bmw m4');
    }

    onVideoSelect = (video) => {
      this.setState({selectedVideo: video})
        console.log(video);
    };

    onTermSubmit = async term => {
       const response = await youtube.get('/search',
            {
               params: {
                   q: term
               }
            });

       this.setState({
           videos: response.data.items,
           selectedVideo: response.data.items[0]
       })
    };

    render() {
        return (
            <div className={'ui container'}>
                <SearchBar onSubmit={this.onTermSubmit} />
                <div className={'ui grid'}>
                    <div className={'ui row'}>
                        <div className={'eleven wide column'}>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className={'five wide column'}>
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;