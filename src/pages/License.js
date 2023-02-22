import React from 'react';
import Layout from '@theme/Layout';

export default function License() {
  return (
    <Layout title="License" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          修改 <code>pages/License.js</code>，然后保存，页面会重载。
          第二行.
          第三行.

          空一行后第四行.
        </p>
      </div>
    </Layout>
  );
}