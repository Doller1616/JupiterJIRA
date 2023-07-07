import { Row, Col } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';


// ----------------------Box Start------------------------------------------------------
const defaultProps = {
    spacing: 0,
    align: 'center',
    justify: '',
    p: null,
    px: null,
    py: null,
    direction: 'row'
}

const Box = (props) => {
    const { children, ...rest } = props;
    const Container = styled.div`
      display: flex;
      flex-wrap: ${props => props?.wrap ? 'wrap' : 'nowrap'};
      gap: ${props => props.spacing}px;
      align-items: ${props => props.align};
      justify-content: ${props => props.justify};
      padding: ${props => props.p ? `${props.p}px` : (props.px ? `${props.px}px ${props.py || props.p || 0 }px` : 
        (props.py ? `${props.px || props.p || 0 }px ${props.py}px`: props.p)) };
      flex-direction: ${props => props.direction}
    `;
  return <Container {...rest}> {children} </Container>
}

Box.defaultProps = defaultProps;
Box.propTypes = {
  spacing: PropTypes.number,
  align: PropTypes.string,
  justify: PropTypes.string,
  p: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  direction: PropTypes.string,
  wrap: PropTypes.bool,
  children: PropTypes.array.isRequired
}

// ------------------Box End ----------------------------------------------------------


export {
  Box
};
