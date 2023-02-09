import React, { Component } from "react";
import UploadService from "../services/file.service";
import Table from "./table";


export default class UploadFiles extends Component {

  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      fileInfos: [],
    };
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({

      currentFile: currentFile,
    });

    UploadService.upload(currentFile, (event) => {
    })
      .then(() => {
        return UploadService.getFiles();
      })

    window.location.reload();

    this.setState({
      selectedFiles: undefined,
    });
  }

  render() {
    const {
      selectedFiles,
    } = this.state;

    return (
      <div className="uploadButtonDivClass">
        <div className="form-group">
          <input className="form-control" 
            name="file" onChange={this.selectFile} type="file" />
        </div>
        <div className="form-group">
          <button className=" uploadButton"
            disabled={!selectedFiles}
            onClick= {this.upload} type="submit">
            Upload</button>
        </div>
        <div>
        <Table/>
        </div>
      </div>
    );
  }
}
