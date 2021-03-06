import React, { Component } from 'react';

class ResourceCard extends Component {

  render() {
    let freeSVG = this.props.price === 'free' ? `<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>
    </svg>` : '';

    return (
      <div className="card hoverable">
        <a href={this.props.url} target="_blank">
          <div className="card-content">
            <span dangerouslySetInnerHTML={{__html: freeSVG}}></span>

            <span className="resource-type" style={{textTransform: 'uppercase'}} >{this.props.type}</span>
            <span className="resource-name" dangerouslySetInnerHTML={{__html: this.props.title}}></span>
            <p className="resource-description" dangerouslySetInnerHTML={{__html: this.props.content}}></p>
          </div>
        </a>
      </div>
    );
  }
}

export default ResourceCard;
