enum Category{
    results='Results',
    macro = 'Macro',
    policy='Policy',
    ipo='IPO',
    corporate='Corporate',
    sector='Sector',
    market='Market',
    other='Other'
}
export type RawNews= {
    id:string,
    url:string,
    source_id:string,
    source_group:string,
    headline:string,
    body:string|null,
    summary:string|null,
    published_at:Date,
    ingested_at:Date,
    ticker_tags:string[]|null,
    category:Category[]|null,
    is_processed:boolean,
    is_filing:boolean
}
export type NseFiling={
    filing_id:string,
    symbol:string,
    company_name:string|null,
    filingType:string|null,
    subject:string|null,
    description:string|null,
    exchange:string,
    filing_date:Date,
    ingested_at:Date,
    pdf_url:string|null,
    is_processed:boolean
}
export type NewsSource={
    source_id:string,
    display_name:string,
    url:string|null,
    source_type:string,
    poll_interval_min:number,
    is_active:boolean,
    notes:string|null,
    added_at:Date,
    paused_at:Date|null,
}
enum Sentiment{
    bearish="Bearish",
    bullish="Bullish",
    neutral="Neutral"
}
enum CatalystType{
    earning='Earning',
    regulatory='Regulatory',
    corporate='Corporate',
    macro=-'Macro',
    other='Other'
}
export type NewsAnalysis={
    id:string,
    raw_news_id:string|null,
    nse_filing_id:string|null,
    processed_at:Date,
    tickers:string[]|null,
    sentiment:Sentiment,
    urgencyScore:number,
    catalyst_type:CatalystType,
    catalyst_summary:string|null,
    is_market_moving:boolean
};