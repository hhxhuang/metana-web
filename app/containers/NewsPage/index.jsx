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

  componentDidMount() {
    this.getDetail();
  }

  getDetail() {
    let id = 1609383887372947458;
    axiosInstance.get(`/info?id=${id}`).then(
      (res) => {
        if (res) {
          console.log(res, res);
        }
      },
      (err) => {
        console.log(err, err);
      }
    );
    let detail = {
      cluster_id: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 1,
        5: 1,
        6: 2,
        7: 2,
        8: 3,
        9: 3,
        10: 4,
        11: 4,
      },
      sentence: {
        0: " The document's approval was required by the International Monetary Fund",
        1: " IMF says it has approved a four-month program for Ukraine aimed at maintaining economic stability",
        2: " EU countries will replenish a fund used to pay for military support for Ukraine with another 2 billion euros",
        3: " EU leaders agreed this week to provide 18 billion euros ($19 billion) in financing to Ukraine",
        4: " Former President Donald Trump's tax returns were released by the U.S. House Ways and Means committee on Friday",
        5: " The House Ways and Means Committee released six years of Donald Trump’s federal income tax returns on Friday",
        6: " Brazilian President-elect Luiz Inacio Lula da Silva has invited Simone Tebet to be his planning minister",
        7: " Guilherme Mello seen as leading candidate to head Brazil's Secretariat for Economic Policy",
        8: " Belarus says it would accept transit of Ukrainian grains through its territory for export from Lithuanian ports",
        9: " Turkish President Recep Tayyip Erdogan discussed ways to expand an agreement to safeguard global grain shipments with Vladimir Putin",
        10: " Taiwan's exports likely dropped in November for the third month in a row and at a much sharper pace",
        11: "Exports last month were estimated to have dropped 6.7% from a year earlier, a Reuters poll of 16 analysts showed .",
      },
      Title: {
        0: "Egypt's president backs bigger private role in line with IMF demands",
        1: "IMF has approved program for Ukraine to help promote donor financing",
        2: "EU states to top up fund used for Ukraine arms purchases by 2 bln euros",
        3: "Russia says EU's new sanctions will just cause more problems for the bloc",
        4: "Trump tax returns: A 'great day for democracy,' or a 'dangerous' precedent?",
        5: "Trump's Tax Returns Released by House Democrats",
        6: "UPDATE 2-Brazil's Lula offers planning ministry to centrist senator Tebet",
        7: "Mello is leading candidate to head Brazil's economic policy secretariat -sources",
        8: "Belarus to allow transit of Ukraine grain for export from Lithuania - U.N.",
        9: "Turkey’s Erdogan Discusses Possible Grain Corridor Expansion",
        10: "Taiwan export decline seen picking up pace in November: Reuters poll",
        11: "Taiwan export decline seen picking up pace in November: Reuters poll",
      },
      Url: {
        0: "https://news.google.com/articles/CBMiU2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9lZ3lwdHMtcHJlc2lkZW50LWJhY2tzLWJpZ2dlci1wcml2YXRlLTEyMjEzNDg4NC5odG1s0gFbaHR0cHM6Ly9maW5hbmNlLnlhaG9vLmNvbS9hbXBodG1sL25ld3MvZWd5cHRzLXByZXNpZGVudC1iYWNrcy1iaWdnZXItcHJpdmF0ZS0xMjIxMzQ4ODQuaHRtbA?hl=en-US&gl=US&ceid=US%3Aen",
        1: "https://news.google.com/articles/CBMiT2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9pbWYtYXBwcm92ZWQtcHJvZ3JhbS11a3JhaW5lLWhlbHAtMDIzMDUzMzYzLmh0bWzSAVdodHRwczovL2ZpbmFuY2UueWFob28uY29tL2FtcGh0bWwvbmV3cy9pbWYtYXBwcm92ZWQtcHJvZ3JhbS11a3JhaW5lLWhlbHAtMDIzMDUzMzYzLmh0bWw?hl=en-US&gl=US&ceid=US%3Aen",
        2: "https://news.google.com/articles/CBMiRWh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9ldS1zdGF0ZXMtdG9wLWZ1bmQtdXNlZC0xMjMwNTgwOTkuaHRtbNIBTWh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vYW1waHRtbC9uZXdzL2V1LXN0YXRlcy10b3AtZnVuZC11c2VkLTEyMzA1ODA5OS5odG1s?hl=en-US&gl=US&ceid=US%3Aen",
        3: "https://news.google.com/articles/CBMiTGh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9ydXNzaWEtc2F5cy1ldXMtc2FuY3Rpb25zLWp1c3QtMTEyODI4OTY4Lmh0bWzSAVRodHRwczovL2ZpbmFuY2UueWFob28uY29tL2FtcGh0bWwvbmV3cy9ydXNzaWEtc2F5cy1ldXMtc2FuY3Rpb25zLWp1c3QtMTEyODI4OTY4Lmh0bWw?hl=en-US&gl=US&ceid=US%3Aen",
        4: "https://news.google.com/articles/CBMie2h0dHBzOi8vd3d3Lm1hcmtldHdhdGNoLmNvbS9zdG9yeS90cnVtcC10YXgtcmV0dXJucy1yZWxlYXNlZC1hLWdyZWF0LWRheS1mb3ItZGVtb2NyYWN5LW9yLWEtZGFuZ2Vyb3VzLXByZWNlZGVudC0xMTY3MjQyNTU1MdIBf2h0dHBzOi8vd3d3Lm1hcmtldHdhdGNoLmNvbS9hbXAvc3RvcnkvdHJ1bXAtdGF4LXJldHVybnMtcmVsZWFzZWQtYS1ncmVhdC1kYXktZm9yLWRlbW9jcmFjeS1vci1hLWRhbmdlcm91cy1wcmVjZWRlbnQtMTE2NzI0MjU1NTE?hl=en-US&gl=US&ceid=US%3Aen",
        5: "https://news.google.com/articles/CBMiWWh0dHBzOi8vd3d3LnRoZWVwb2NodGltZXMuY29tL3RydW1wcy10YXgtcmV0dXJucy1yZWxlYXNlZC1ieS1ob3VzZS1kZW1vY3JhdHNfNDk1MzE1OS5odG1s0gEA?hl=en-US&gl=US&ceid=US%3Aen",
        6: "https://news.google.com/articles/CBMiS2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy8xLXNpbW9uZS10ZWJldC1zZWVuLWFjY2VwdGluZy0xNTU5NTY4NDUuaHRtbNIBU2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vYW1waHRtbC9uZXdzLzEtc2ltb25lLXRlYmV0LXNlZW4tYWNjZXB0aW5nLTE1NTk1Njg0NS5odG1s?hl=en-US&gl=US&ceid=US%3Aen",
        7: "https://news.google.com/articles/CBMiUmh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9tZWxsby1sZWFkaW5nLWNhbmRpZGF0ZS1oZWFkLWJyYXppbHMtMTcxNTIwMjk0Lmh0bWzSAVpodHRwczovL2ZpbmFuY2UueWFob28uY29tL2FtcGh0bWwvbmV3cy9tZWxsby1sZWFkaW5nLWNhbmRpZGF0ZS1oZWFkLWJyYXppbHMtMTcxNTIwMjk0Lmh0bWw?hl=en-US&gl=US&ceid=US%3Aen",
        8: "https://news.google.com/articles/CBMiUWh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9iZWxhcnVzLWFsbG93LXRyYW5zaXQtdWtyYWluZS1ncmFpbi0xOTU2NDgxMjUuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
        9: "https://news.google.com/articles/CBMiVmh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy90dXJrZXktZXJkb2dhbi1kaXNjdXNzZXMtZXhwYW5kaW5nLWdyYWluLTEyMDUxMDE1OS5odG1s0gFeaHR0cHM6Ly9maW5hbmNlLnlhaG9vLmNvbS9hbXBodG1sL25ld3MvdHVya2V5LWVyZG9nYW4tZGlzY3Vzc2VzLWV4cGFuZGluZy1ncmFpbi0xMjA1MTAxNTkuaHRtbA?hl=en-US&gl=US&ceid=US%3Aen",
        10: "https://news.google.com/articles/CBMiUGh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy90YWl3YW4tZXhwb3J0LWRlY2xpbmUtc2Vlbi1waWNraW5nLTAzMzczODIxNy5odG1s0gFYaHR0cHM6Ly9maW5hbmNlLnlhaG9vLmNvbS9hbXBodG1sL25ld3MvdGFpd2FuLWV4cG9ydC1kZWNsaW5lLXNlZW4tcGlja2luZy0wMzM3MzgyMTcuaHRtbA?hl=en-US&gl=US&ceid=US%3Aen",
        11: "https://news.google.com/articles/CBMiUGh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy90YWl3YW4tZXhwb3J0LWRlY2xpbmUtc2Vlbi1waWNraW5nLTAzMzczODIxNy5odG1s0gFYaHR0cHM6Ly9maW5hbmNlLnlhaG9vLmNvbS9hbXBodG1sL25ld3MvdGFpd2FuLWV4cG9ydC1kZWNsaW5lLXNlZW4tcGlja2luZy0wMzM3MzgyMTcuaHRtbA?hl=en-US&gl=US&ceid=US%3Aen",
      },
      Publisher: {
        0: "Yahoo Finance",
        1: "Yahoo Finance",
        2: "Yahoo Finance",
        3: "Yahoo Finance",
        4: "MarketWatch",
        5: "The Epoch Times",
        6: "Yahoo Finance",
        7: "Yahoo Finance",
        8: "Yahoo Finance",
        9: "Yahoo Finance",
        10: "Yahoo Finance",
        11: "Yahoo Finance",
      },
      Date: {
        0: "2022-12-29",
        1: "2022-12-19",
        2: "2022-12-08",
        3: "2022-12-17",
        4: "2022-12-31",
        5: "2022-12-30",
        6: "2022-12-27",
        7: "2022-12-15",
        8: "2022-12-09",
        9: "2022-12-11",
        10: "2022-12-04",
        11: "2022-12-04",
      },
      Language: {
        0: "en-US",
        1: "en-US",
        2: "en-US",
        3: "en-US",
        4: "en-US",
        5: "en-US",
        6: "en-US",
        7: "en-US",
        8: "en-US",
        9: "en-US",
        10: "en-US",
        11: "en-US",
      },
      cluster_name: {
        0: "Finding ways to name it",
        1: "Finding ways to name it",
        2: "Finding ways to name it",
        3: "Finding ways to name it",
        4: "Finding ways to name it",
        5: "Finding ways to name it",
        6: "Finding ways to name it",
        7: "Finding ways to name it",
        8: "Finding ways to name it",
        9: "Finding ways to name it",
        10: "Finding ways to name it",
        11: "Finding ways to name it",
      },
    };
  }

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
