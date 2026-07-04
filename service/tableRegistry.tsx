import {
     NseFiling,
     RawNews,
     NewsAnalysis,
     NewsSource
     } from '@/types/tables';
import {
    ColumnDef,
    createColumnHelper
} from '@tanstack/react-table';

interface TableMeta{
    id:string;
    name:string,
    columns:ColumnDef<any,any>[],
    endpoint:string,
}

const rawNewsHelper= createColumnHelper<RawNews>();

const rawNewsColumns = [
    rawNewsHelper.accessor('id',{header:'ID',sortingFn:'alphanumeric'}),
    rawNewsHelper.accessor('url',{header:'URL',enableSorting:false}),
    rawNewsHelper.accessor('source_id',{header:'Source ID', enableSorting:false}),
    rawNewsHelper.accessor('source_group',{header:'Source Group', enableSorting:false}),
    rawNewsHelper.accessor('headline', {header:'Headline'}),
    rawNewsHelper.accessor('summary', {header:'Summary'}),
    rawNewsHelper.accessor('body',{header:'Body'}),
    rawNewsHelper.accessor('published_at',{header:'Published At', sortingFn:'datetime'}),
    rawNewsHelper.accessor('ingested_at', {header:'Ingested At', sortingFn:'datetime'}),
    rawNewsHelper.accessor('ticker_tags', {header:'Ticker Tags',enableSorting:false}),
    rawNewsHelper.accessor('category', {header:'Category'}),
    rawNewsHelper.accessor('is_processed', {header:'is Processed'}),
    rawNewsHelper.accessor('is_filing', {header:'is Filing'}),
];
const newsAnalysisHelper= createColumnHelper<NewsAnalysis>();
const newsAnalysisColumn = [
    newsAnalysisHelper.accessor('id',{header:'ID',sortingFn:'alphanumeric'}),
    newsAnalysisHelper.accessor('raw_news_id',{header:'Raw News ID',sortingFn:'alphanumericCaseSensitive'}),
    newsAnalysisHelper.accessor('nse_filing_id',{header:'Nse Filing ID'}),
    newsAnalysisHelper.accessor('processed_at',{header:'Processed At', sortingFn:'datetime'}),
    newsAnalysisHelper.accessor('tickers',{header:'Tickers',enableSorting:false}),
    newsAnalysisHelper.accessor('sentiment',{header:'Sentiment'}),
    newsAnalysisHelper.accessor('urgencyScore',{header:'Urgency Score'}),
    newsAnalysisHelper.accessor('catalyst_type',{header:'Catalyst Type'}),
    newsAnalysisHelper.accessor('catalyst_summary',{header:'Catalyst Summary',enableSorting:false}),
    newsAnalysisHelper.accessor('is_market_moving',{header:'is Market Moving'})
];
const newsSourceHelper= createColumnHelper<NewsSource>();
const newsSourceColumn = [
    newsSourceHelper.accessor('source_id',{header:'Source ID'}),
    newsSourceHelper.accessor('display_name',{header:'Display Name', enableSorting:false}),
    newsSourceHelper.accessor('url',{header:'URL', enableSorting:false}),
    newsSourceHelper.accessor('source_type',{header:'Source Type', enableSorting:false}),
    newsSourceHelper.accessor('poll_interval_min',{header:'Poll Interval Min'}),
    newsSourceHelper.accessor('is_active',{header:'Is Active'}),
    newsSourceHelper.accessor('notes',{header:'Notes'}),
    newsSourceHelper.accessor('added_at',{header:'Added At', sortingFn:'datetime'}),
    newsSourceHelper.accessor('paused_at',{header:'Paused At',sortingFn:'datetime'}),
]
const nseFilingHelper= createColumnHelper<NseFiling>();
const nseFilingColumn = [
    nseFilingHelper.accessor('filing_id',{header:'Filing ID'}),
    nseFilingHelper.accessor('symbol',{header:'Symbol'}),
    nseFilingHelper.accessor('company_name',{header:'Company Name'}),
    nseFilingHelper.accessor('filingType',{header:'Filing Type'}),
    nseFilingHelper.accessor('subject',{header:'Subject'}),
    nseFilingHelper.accessor('description',{header:'Description', enableSorting:false}),
    nseFilingHelper.accessor('exchange',{header:'Exchange', enableSorting:false}),
    nseFilingHelper.accessor('filing_date',{header:'Filing Date', sortingFn:'datetime'}),
    nseFilingHelper.accessor('ingested_at',{header:'Ingested At',sortingFn:'datetime'}),
    nseFilingHelper.accessor('pdf_url',{header:'Pdf URL', enableSorting:false}),
    nseFilingHelper.accessor('is_processed',{header:'Is Processed'})
]

export const tableRegistry:Record<string,TableMeta>={
    'raw-news':{
        id:'raw-news',
        name:'raw-news',
        columns:rawNewsColumns,
        endpoint:`${process.env.NEXT_PUBLIC_RAW_NEWS_URL}`,
    },
    'nse-filing':{
        id:'nse-filing',
        name:'nse-filing',
        columns:nseFilingColumn,
        endpoint:`${process.env.NEXT_PUBLIC_NSE_FILING_URL}`,
    },
    'news-source':{
        id:'news-source',
        name:'news-source',
        columns:newsSourceColumn,
        endpoint:`${process.env.NEXT_PUBLIC_NEWS_SOURCE_URL}`,
    },
    'news-analysis':{
        id:'news-analysis',
        name:'news-analysis',
        columns:newsAnalysisColumn,
        endpoint:`${process.env.NEXT_PUBLIC_NEWS_ANALYSIS}`,
    }
};