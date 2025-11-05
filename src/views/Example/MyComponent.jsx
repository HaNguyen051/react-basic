import React from 'react';

class Counter extends React.Component {
   
    state = {
        count: 0
    };
    // Một hàm để xử lý việc click
    handleIncrease = () => {
        // Dùng this.setState để cập nhật state
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <p>Số lần click: {this.state.count}</p>
        
                {/* Mục 7: DOM Events sẽ được học ở đây */}
                <button onClick={this.handleIncrease}>
                    Tăng lên 1
                </button>
            </div>
        );
    }
}
export default Counter