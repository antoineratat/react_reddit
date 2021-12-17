export type vote = string | boolean

export interface Posts {}

export interface Post {
  author: string
  ups: number
  title: string
  num_comments: number
  image: string
  created_utc: number
}

export interface AllAwarding {
  giver_coin_reward: number
  subreddit_id: null
  is_new: boolean
  days_of_drip_extension: number
  coin_price: number
  id: string
  penny_donate: number
  award_sub_type: string
  coin_reward: number
  icon_url: string
  days_of_premium: number
  tiers_by_required_awardings: null
  resized_icons: ResizedIcon[]
  icon_width: number
  static_icon_width: number
  start_date: null
  is_enabled: boolean
  awardings_required_to_grant_benefits: null
  description: string
  end_date: null
  subreddit_coin_reward: number
  count: number
  static_icon_height: number
  name: string
  resized_static_icons: ResizedIcon[]
  icon_format: string
  icon_height: number
  penny_price: number
  award_type: string
  static_icon_url: string
}

export interface ResizedIcon {
  url: string
  width: number
  height: number
}

export interface Gildings {}

export interface Media {
  reddit_video: RedditVideo
}

export interface RedditVideo {
  bitrate_kbps: number
  fallback_url: string
  height: number
  width: number
  scrubber_media_url: string
  dash_url: string
  duration: number
  hls_url: string
  is_gif: boolean
  transcoding_status: string
}

export interface Preview {
  images: Image[]
  enabled: boolean
}

export interface Image {
  source: ResizedIcon
  resolutions: ResizedIcon[]
  variants: Gildings
  id: string
}

export interface PostsSlice {
  posts: Posts
  isLoadingPosts: boolean
  hasErrorPosts: boolean
}

export interface DataBloated {
  kind: string
  data: Data
}

export interface Data {
  approved_at_utc: null
  subreddit: string
  selftext: string
  author_fullname: string
  saved: boolean
  mod_reason_title: null
  gilded: number
  clicked: boolean
  title: string
  link_flair_richtext: any[]
  subreddit_name_prefixed: string
  hidden: boolean
  pwls: number
  link_flair_css_class: null
  downs: number
  thumbnail_height: number
  top_awarded_type: null
  hide_score: boolean
  name: string
  quarantine: boolean
  link_flair_text_color: string
  upvote_ratio: number
  author_flair_background_color: null
  subreddit_type: string
  ups: number
  total_awards_received: number
  media_embed: Gildings
  thumbnail_width: number
  author_flair_template_id: null
  is_original_content: boolean
  user_reports: any[]
  secure_media: null
  is_reddit_media_domain: boolean
  is_meta: boolean
  category: null
  secure_media_embed: Gildings
  link_flair_text: null
  can_mod_post: boolean
  score: number
  approved_by: null
  is_created_from_ads_ui: boolean
  author_premium: boolean
  thumbnail: string
  edited: boolean
  author_flair_css_class: null
  author_flair_richtext: any[]
  gildings: Gildings
  post_hint: string
  content_categories: null
  is_self: boolean
  mod_note: null
  created: number
  link_flair_type: string
  wls: number
  removed_by_category: null
  banned_by: null
  author_flair_type: string
  domain: string
  allow_live_comments: boolean
  selftext_html: null
  likes: null
  suggested_sort: null
  banned_at_utc: null
  url_overridden_by_dest: string
  view_count: null
  archived: boolean
  no_follow: boolean
  is_crosspostable: boolean
  pinned: boolean
  over_18: boolean
  preview: Preview
  all_awardings: any[]
  awarders: any[]
  media_only: boolean
  can_gild: boolean
  spoiler: boolean
  locked: boolean
  author_flair_text: null
  treatment_tags: any[]
  visited: boolean
  removed_by: null
  num_reports: null
  distinguished: null
  subreddit_id: string
  author_is_blocked: boolean
  mod_reason_by: null
  removal_reason: null
  link_flair_background_color: string
  id: string
  is_robot_indexable: boolean
  report_reasons: null
  author: string
  discussion_type: null
  num_comments: number
  send_replies: boolean
  whitelist_status: string
  contest_mode: boolean
  mod_reports: any[]
  author_patreon_flair: boolean
  author_flair_text_color: null
  permalink: string
  parent_whitelist_status: string
  stickied: boolean
  url: string
  subreddit_subscribers: number
  created_utc: number
  num_crossposts: number
  media: null
  is_video: boolean
}
