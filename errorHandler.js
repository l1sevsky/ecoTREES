function errorHandler (props) {
    props.message = props?.message || 'Что-то пошло не так, попробуйте снова';

    props.res.status(props.status).json({ message: props.message });
    console.log(props.log, ':   ', props.error);
}

module.exports = errorHandler;