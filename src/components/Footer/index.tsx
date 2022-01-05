import { setLocale, useIntl } from 'umi';
import React, { useState } from 'react';
import logo from '@/assets/foot_logo.png';

import './index.css';

export default function IndexPage() {
  const intl = useIntl();

  const [tel, setTel] = useState();
  const [name, setName] = useState();

  return (
    <footer
      className="footer py-12 xl:py-24"
      style={{
        background: '#34A09B',
        backgroundImage:
          'url(https://wehome-image.oss-cn-shanghai.aliyuncs.com/4430e1782ef3a3e2e743bcc660e008b9.png)',
        backgroundSize: 'cover',
      }}
    >
      <a id={'id7'}></a>
      <div className="container mx-auto">
        <div className="p-5 lg:p-12 xl:p-12 2xl:p-12">
          <div className="bg-white rounded-lg flex flex-wrap p-12 lg:p-20 xl:p-24">
            <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 lg:mt-1">
              <div>
                <img src={logo} className="w-2/3 lg:w-1/2 2xl:w-2/5" alt="" />
              </div>
              <div className="mt-6">
                <div className="text-sm 2xl:text-base">
                  {intl.formatMessage({
                    id: 'footer.欢迎咨询',
                  })}
                </div>
                <div
                  className="text-lg xl:text-xl 2xl:text-2xl"
                  style={{ color: '#C8171E' }}
                >
                  021-62335008
                </div>
              </div>
              <div className="mt-6">
                <div className="text-sm 2xl:text-base">
                  {intl.formatMessage({
                    id: 'footer.项目地址',
                  })}
                </div>
                <div className="text-lg xl:text-xl 2xl:text-2xl mt-1">
                  {intl.formatMessage({
                    id: 'footer.上海市闵行区丰虹路199号',
                  })}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 mt-12 lg:mt-1">
              <div>
                <input
                  className="p-3 w-full"
                  style={{
                    border: '1px solid #DFEBEB',
                  }}
                  type="text"
                  placeholder={intl.formatMessage({
                    id: 'footer.请输入您的姓名',
                  })}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  className="p-3 w-full mt-5"
                  style={{
                    border: '1px solid #DFEBEB',
                  }}
                  type="number"
                  placeholder={intl.formatMessage({
                    id: 'footer.请输入您的手机号',
                  })}
                  onChange={(e) => {
                    setTel(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  className="p-3 mt-10 text-white text-base xl:text-lg w-full"
                  style={{
                    background: '#00C9D0',
                  }}
                  onClick={() => {
                    if (tel?.length !== 11) {
                      alert('手机号格式不正确');
                      return;
                    }
                    fetch(
                      'http://open-api.wehome.net.cn/standard_project/wehome/open_dobe_web_order_create',
                      {
                        method: 'POST',
                        body: JSON.stringify({
                          tel,
                          name,
                          room_id: 9351,
                        }),
                      },
                    );
                  }}
                >
                  {intl.formatMessage({
                    id: 'footer.立即免费预约参观',
                  })}
                </button>
              </div>
              <div
                className="text-center mt-3 text-sm lg:text-base"
                style={{ color: '#00C9D0' }}
              >
                {intl.formatMessage({
                  id: 'footer.我们的专业顾问会尽快与您联系',
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
