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
import moment from "moment";
class NewsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    this.setState(
      {
        id: this.getUrlParam("id"),
        q: this.getUrlParam("q"),
      },
      this.getDetail
    );
  }

  getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
  }

  getDetail() {
    let id = this.state.id;
    let q = this.state.q;
    let url = `/info`;
    // let url = `/info?id=${id}&q=${q}`
    if (!!id) {
      url = `${url}?id=${id}`;
    }
    if (!!q) {
      if (url.indexOf("?") > -1) {
        url = `${url}&q=${q}`;
      } else {
        url = `${url}?q=${q}`;
      }
    }
    axiosInstance.get(url).then(
      (res) => {
        if (res && res.data && !isObjectEmpty(res.data)) {
          console.log("res", res.data);
          this.handelList(res.data);
          this.setState({
            detail: res.data,
          });
        }
      },
      (err) => {
        console.log(err, err);
      }
    );
  }

  handelList(detail) {
    let cluster_id = detail.cluster_id;
    let sentenceIndexObj = {};
    if (cluster_id && !isObjectEmpty(cluster_id)) {
      for (let key in cluster_id) {
        let value = cluster_id[key];
        if (sentenceIndexObj[value]) {
          sentenceIndexObj[value].push(key);
        } else {
          sentenceIndexObj[value] = [key];
        }
        console.log(key, cluster_id[key]);
      }
    }
    let newData = [];
    for (let key in sentenceIndexObj) {
      let list = sentenceIndexObj[key];
      console.log(list, "list");
      let info = [];
      for (let index = 0; index < list.length; index++) {
        const sentencesIndex = list[index];
        info.push({
          publisher: detail.Publisher[sentencesIndex],
          date: detail.Date[sentencesIndex],
          sentence: detail.sentence[sentencesIndex],
          title: detail.Title[sentencesIndex],
          url: detail.Url[sentencesIndex],
        });
      }
      newData.push({
        clusterName: detail["cluster_name"][list[0]],
        list: info,
      });
    }
    this.setState({
      newData: newData,
    });
    console.log(newData);
  }

  renderList() {
    let newData = this.state.newData;
    return (
      <div>
        {newData &&
          newData.length > 0 &&
          newData.map((item, index) => (
            <div key={index} className="flex-column atc_item">
              <div className="atc_name">THREAD&nbsp;{parseInt(index) + 1}</div>
              <div className="atc_tip">{item.clusterName}</div>
              {item.list &&
                item.list.length > 0 &&
                item.list.map((item2, index2) => (
                  <div key={index2}>
                    <div className="atc_date">
                      {item2.publisher},&nbsp;
                      {item2.date}
                      {/* {moment(item2.date).format("MMMM D YYYY")} */}
                    </div>
                    <div className="atc_detail">{item2.sentence}</div>
                    <div className="atc_company">
                      <span>-&nbsp;</span>
                      <a href={item2.url} target="_blank" className="text_line">
                        "{item2.title}"
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
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
            <div className="page_title">
              This newsletter is tailored based on your request
            </div>
            <div className="page_tip">
              {this.state.detail && this.state.detail.prompt}
            </div>
          </div>
          {this.renderList()}
          <div>
            <img
              className="con_logo"
              src="https://dim.mcusercontent.com/cs/343c065758602b7f352c09430/images/19c5da9b-2ef2-8c5c-4d52-de5f09674017.png?w=564&dpr=2"
            />
          </div>
          <div className="page_info">
            Powered by SOTA NLP and AI technologies, METANA aspires to provide
            you with a panoramic narrative across media platforms, countries,
            and languages. This instantly generated newsletter is curated by
            Elon - An AI news curator under testing. If you have any feedback or
            comments on this demo, please get in touch with us by clicking on
            the icons below.
          </div>
          <div className="flex-row page_icons_wrap">
            <a
              className="page_icons_inner"
              href="https://www.linkedin.com/company/metana-news/"
              target="_blank"
            >
              <img
                className="page_icons"
                src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Flinkedin-filled-dark-40.png?w=40&dpr=2"
              />
            </a>
            <a
              className="page_icons_inner"
              href="https://www.metana.news/"
              target="_blank"
            >
              <img
                className="page_icons"
                src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Fwebsite-filled-dark-40.png?w=40&dpr=2"
              />
            </a>
            <a
              className="page_icons_inner"
              href="mailto:hi@metana.news"
              target="_blank"
            >
              <img
                className="page_icons"
                src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Femail-filled-dark-40.png?w=40&dpr=2"
              />
            </a>
          </div>
        </div>
        <div className="page_bottom">
          <div className="page_bottom_one">
            Copyright (C) 2023 Metana. All rights reserved.
          </div>
        </div>
        {/* <div className="page_bottom">
          <div className="page_bottom_one">
            Copyright (C) *|CURRENT_YEAR|* *|LIST:COMPANY|*. All rights
            reserved.
          </div>
          <div className="page_bottom_two">
            *|IFNOT:ARCHIVE_PAGE|**|LIST:DESCRIPTION|**|END:IF|*
          </div>
        </div> */}
        {/* <div className="flex-column page_footer">
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
        </div> */}
      </div>
    );
  }
}

export default NewsPage;
