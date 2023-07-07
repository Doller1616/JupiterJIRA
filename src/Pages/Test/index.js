import Test from './Test';
import { connect } from 'react-redux';
import { postActions } from './redux/reducer';

const mapStateToProps = (state) => {
    return {
      posts: state.posts,
      loading: state.loading,
      error: state.error,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchPosts: () => {
        console.log('fire Action');
         dispatch(postActions.fetchPostsRequest({a: 1}))
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Test);