import React from "react";
import "./style.less";
import hyde from "../../../mock/hyde";
import { FiPlusCircle } from "react-icons/fi";
import images from "../../util/images";
import Switch from "react-switch";
import axiosInstance from "../../util/request";
import { Link } from "react-router-dom";
import data from "../../../mock/data";
import { isObjectEmpty } from "../../util/obj";
class NewsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="flex-column new_page">
        <div>
          <img
            className="top_logo"
            src="https://dim.mcusercontent.com/cs/343c065758602b7f352c09430/images/418f25a6-54aa-459b-9971-5cf01cbf6fc6.png?w=564&dpr=2"
          />
        </div>
        <div className="page_con">
          <div className="flex-column title_tip">
            <div className="page_title">Here are the voices on</div>
            <div className="page_tip">“Russian Ukraine war, NATO alliance”</div>
          </div>
          <div className="flex-column atc_item">
            <div className="atc_name">VOICE 1</div>
            <div className="atc_tip">
              Russian missile strikes escalate in Ukraine
            </div>
            <div className="atc_date">New York Times, December 13 2022</div>
            <div className="atc_detail">
              Ukrainians are on edge after President Zelenskyy warned citizens
              of more Russian missile strikes to come. Many of Vladimir Putin's
              missiles have been aimed at Ukraine's power grid.
            </div>
            <div className="atc_company">
              - Russia's collapse in northeast Ukraine ignites fury from Putin
              loyalists
            </div>
            <div className="atc_date">Business Times, December 13 2022</div>
            <div className="atc_detail">
              Ukrainians are on edge after President Zelenskyy warned citizens
              of more Russian missile strikes to come. Many of Vladimir Putin's
              missiles have been aimed at Ukraine's power grid.
            </div>
            <div className="atc_company">
              - U.S. warns of 'horrific' consequences if Russia uses nuclear
              weapons in Ukraine
            </div>
          </div>
          <div className="flex-column atc_item">
            <div className="atc_name">VOICE 2</div>
            <div className="atc_tip">SUMMARY_MAINPOINT</div>
            <div className="atc_date">MEDIA, DATE</div>
            <div className="atc_detail">
              SUMMARY_QUOTE. (Translated from LANGUAGE)
            </div>
            <div className="atc_company">- TITLE with URL</div>
            <div className="atc_date">MEDIA, DATE</div>
            <div className="atc_detail">SUMMARY_QUOTE</div>
            <div className="atc_company">- TITLE with URL</div>
          </div>
          <div>
            <img
              className="con_logo"
              src="https://dim.mcusercontent.com/cs/343c065758602b7f352c09430/images/19c5da9b-2ef2-8c5c-4d52-de5f09674017.png?w=564&dpr=2"
            />
          </div>
          <div className="page_info">
            This is an instantly generated, customizable newsletter with
            coverage of 9 languages, 11 countries, and 80 media outlets. With
            cutting-edge NLP and AI technologies, METANA gives readers access to
            a panoramic view across platforms and languages.{" "}
          </div>
          <div className="flex-row page_icons_wrap">
            <img
              className="page_icons"
              src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Flinkedin-filled-dark-40.png?w=40&dpr=2"
            />
            <img
              className="page_icons"
              src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Fwebsite-filled-dark-40.png?w=40&dpr=2"
            />
            <img
              className="page_icons"
              src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Femail-filled-dark-40.png?w=40&dpr=2"
            />
          </div>
        </div>
        <div className="page_bottom">
          <div className="page_bottom_one">
            Copyright (C) *|CURRENT_YEAR|* *|LIST:COMPANY|*. All rights
            reserved.
          </div>
          <div className="page_bottom_two">
            *|IFNOT:ARCHIVE_PAGE|**|LIST:DESCRIPTION|**|END:IF|*
          </div>
        </div>
        <div className="flex-column page_footer">
          <div>
            This email was sent to{" "}
            <a className="grey" href="mailto:*|EMAIL|*" target="_blank">
              *|EMAIL|*
            </a>
          </div>
          <div>
            <a className="grey" href="*|ABOUT_LIST|*" target="_blank">
              <em>why did I get this?</em>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className="grey" href="*|UNSUB|*">
              unsubscribe from this list
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className="grey" href="*|UPDATE_PROFILE|*">
              update subscription preferences
            </a>
          </div>
          <div> *|LIST:ADDRESSLINE|*</div>
          <br />
        </div>
      </div>
    );
  }
}

export default NewsPage;
