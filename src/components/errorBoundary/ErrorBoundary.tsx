import * as React from "react";
import Modal from '../common/modal/Modal';

interface IProps {

}

interface IState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
        hasError: false
    };
  
  }
  static getDerivedStateFromError(error) {
    debugger
    console.log(`Error log from getDerivedStateFromError: ${error}`);
    return { hasError: true };
  }


  componentDidCatch(error, info) {
    console.log(`Error log from componentDidCatch: ${error}`);
    console.log(info);
  }

  render() {
    return( 
        <>
        <Modal> Something Blew Up </Modal>
        {/* {this.props.children} */}
        </>
    )
  }
}

export default ErrorBoundary;