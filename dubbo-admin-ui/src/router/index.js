/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Vue from 'vue'
import Router from 'vue-router'
import ServiceSearch from '@/components/ServiceSearch'
import ServiceDetail from '@/components/ServiceDetail'
import TestMethod from '@/components/test/TestMethod'
import RoutingRule from '@/components/governance/RoutingRule'
import TagRule from '@/components/governance/TagRule'
import MeshRule from '@/components/governance/MeshRule'
import AccessControl from '@/components/governance/AccessControl'
import LoadBalance from '@/components/governance/LoadBalance'
import WeightAdjust from '@/components/governance/WeightAdjust'
import Overrides from '@/components/governance/Overrides'
import ServiceTest from '@/components/test/ServiceTest'
import ApiDocs from '@/components/apiDocs/ApiDocs'
import ServiceMock from '@/components/test/ServiceMock'
import ServiceMetrics from '@/components/metrics/ServiceMetrics'
import ServiceRelation from '@/components/metrics/ServiceRelation'
import Management from '@/components/Management'
import Accesslog from '@/components/traffic/Accesslog'
import Arguments from '@/components/traffic/Arguments'
import Host from '@/components/traffic/Host'
import Isolation from '@/components/traffic/Isolation'
import Mock from '@/components/traffic/Mock'
import Region from '@/components/traffic/Region'
import Retry from '@/components/traffic/Retry'
import Timeout from '@/components/traffic/Timeout'
import Weight from '@/components/traffic/Weight'
import Index from '@/Index'
import Login from '@/Login'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        requireLogin: true
      },
      children: [
        {
          path: '/service',
          name: 'ServiceSearch',
          component: ServiceSearch,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/serviceDetail',
          name: 'ServiceDetail',
          component: ServiceDetail,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/testMethod',
          name: 'TestMethod',
          component: TestMethod,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/governance/routingRule',
          name: 'RoutingRule',
          component: RoutingRule,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/governance/tagRule',
          name: 'TagRule',
          component: TagRule,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/governance/meshRule',
          name: 'MeshRule',
          component: MeshRule,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/governance/access',
          name: 'AccessControl',
          component: AccessControl,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/governance/loadbalance',
          name: 'LoadBalance',
          component: LoadBalance,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/governance/weight',
          name: 'WeightAdjust',
          component: WeightAdjust,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/governance/config',
          name: 'Overrides',
          component: Overrides,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/test',
          name: 'ServiceTest',
          component: ServiceTest,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/mock/rule',
          name: 'ServiceMock',
          component: ServiceMock,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/metrics/index',
          name: 'ServiceMetrics',
          component: ServiceMetrics,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/metrics/relation',
          name: 'ServiceRelation',
          component: ServiceRelation,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/management',
          name: 'Management',
          component: Management,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/apiDocs',
          name: 'apiDocs',
          component: ApiDocs,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/traffic/accesslog',
          name: 'accesslog',
          component: Accesslog,
          meta: {
            requireLogin: true
          }
        },
        {
          path: '/traffic/retry',
          name: 'retry',
          component: Retry,
          meta: {
            requireLogin: true
          }
        }, {
          path: '/traffic/region',
          name: 'region',
          component: Region,
          meta: {
            requireLogin: true
          }
        }, {
          path: '/traffic/isolation',
          name: 'isolation',
          component: Isolation,
          meta: {
            requireLogin: true
          }
        }, {
          path: '/traffic/weight',
          name: 'weight',
          component: Weight,
          meta: {
            requireLogin: true
          }
        }, {
          path: '/traffic/arguments',
          name: 'arguments',
          component: Arguments,
          meta: {
            requireLogin: true
          }
        }, {
          path: '/traffic/mock',
          name: 'mock',
          component: Mock,
          meta: {
            requireLogin: true
          }
        }, {
          path: '/traffic/host',
          name: 'host',
          component: Host,
          meta: {
            requireLogin: true
          }
        }, {
          path: '/traffic/timeout',
          name: 'timeout',
          component: Timeout,
          meta: {
            requireLogin: true
          }
        }]
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requireLogin: false
      }
    }

  ]
})
