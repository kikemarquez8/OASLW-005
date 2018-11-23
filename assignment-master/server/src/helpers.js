export function formatQueryPagination(context){
    context.params.query = Object.assign(context.params.query, getFormattedPaginationParameters(context.params.query))
    return context
}

const getFormattedPaginationParameters = ({skip = 0, limit = 10}) => ({ // limiting calls to 10 results/call
    $skip:  skip,
    $limit: limit,
    skip: undefined,
    limit: undefined
});

export function paginationDefined({query}){
    let {skip, limit} = query;
    return (isDefined(skip) || isDefined(limit))
}

function isDefined(x){
    return typeof x !== 'undefined'
}